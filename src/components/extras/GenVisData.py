import requests
import json

def generateData():
    baseurl = 'https://bandtogetherapi.xyz/restapi/'

    genreData = {}
    stateData = []
    ticketPriceData = []
    getGenreData(baseurl)
    getStateData(baseurl)
    getTicketData(baseurl)


def getGenreData(baseUrl):
    url = baseUrl + "artist/search?query="

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
        out.write('[\n')
        for genreKey, genreVal in genreDataDict.items():
            out.write('{\n"genre": "' + genreKey + '",\n"numArtists": ' + str(genreVal) + '\n},\n')
        out.write(']')

def getStateData(baseUrl):
  url = baseUrl + "location/search?query="
  #headers = {'Accept':'application/json'}

  response = requests.get(url)
  with open('stateData.json', 'wb') as out:
    out.write(response.content)

def getTicketData(baseUrl):
  url = baseUrl + "concert/search?query="
  #headers = {'Accept':'application/json'}

  response = requests.get(url)
  with open('ticketData.json', 'wb') as out:
    out.write(response.content)


if __name__ == "__main__":
    generateData()

