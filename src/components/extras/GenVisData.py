import requests
import json

def generateData():
    baseurl = 'https://bandtogetherapi.xyz/restapi/'
    getGenreData(baseurl)
    getStateData(baseurl)
    getTicketData(baseurl)


def getGenreData(baseUrl):
    url = baseUrl + "artist/search"
    response = requests.get(url)
    dataList = json.loads(response.text)

    genreDataDict = {}

    for item in dataList:
        genre = item['genre']
        try:
            genreDataDict[genre] += 1
        except KeyError:
            genreDataDict[genre] = 1

    with open('genreData.json', 'w') as out:
        out.write("{\n")
        miscCount = 0
        for i, datum in enumerate(genreDataDict.items()):
            if datum[1] > 5:
                out.write('\n"' + datum[0] + '": ' + str(datum[1]) + ", ")
            else:
                miscCount += 1
        out.write('"Misc": ' + str(miscCount))
        out.write("}")


def getStateData(baseUrl):
    url = baseUrl + "concert/search"
    response = requests.get(url)
    dataList = json.loads(response.text)

    stateDataDict = {}

    for item in dataList:
        state = item['region'].strip()
        try:
            stateDataDict[state] += 1
        except KeyError:
            stateDataDict[state] = 1

    with open('stateData.json', 'w') as out:
        out.write('[\n')
        for i, state in enumerate(reversed(sorted(stateDataDict.items(), key=lambda kv: (kv[1], kv[0])))):
            if i == len(stateDataDict.items()) - 1:
                out.write('{\n"state": "' + str(state[0]) + '",\n"numConcerts": ' + str(state[1]) + '\n}\n')
            else:
                out.write('{\n"state": "' + str(state[0]) + '",\n"numConcerts": ' + str(state[1]) + '\n},\n')
        out.write(']')


def getTicketData(baseUrl):
    url = baseUrl + "concert/search"
    response = requests.get(url)
    dataList = json.loads(response.text)

    ticketPricesDict = {}

    for item in dataList:
        try:
            minPrice = float(item['ticket_min'])
            maxPrice = float(item['ticket_max'])
            avg_price = ((minPrice + maxPrice) // 2) // 10 * 10
            try:
                ticketPricesDict[avg_price] += 1
            except KeyError:
                ticketPricesDict[avg_price] = 1
        except TypeError:
            pass


    with open('ticketData.json', 'w') as out:
        out.write('[\n')
        first = True
        for i, price in enumerate(ticketPricesDict.items()):
            if float(price[0]) < 1000 and float(price[0]) > 0:
                if first:
                    out.write('{\n"price": "' + str(price[0]) + '",\n"priceCount": ' + str(price[1]) + '\n}')
                    first = False
                else:
                    out.write(',\n{\n"price": "' + str(price[0]) + '",\n"priceCount": ' + str(price[1]) + '\n}')
        out.write(']')


if __name__ == "__main__":
    generateData()

