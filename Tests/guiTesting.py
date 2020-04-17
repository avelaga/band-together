from selenium import webdriver
from unittest import TestCase, main
browser = webdriver.Chrome('/Users/Gavin Rodrigue/Downloads/chromedriver_win32/chromedriver')


class guiTests(TestCase):

    def test_splash(self):
        # make sure we load the home page correctly
        browser.get('http://localhost:8080/')
        assert browser.current_url == 'http://localhost:8080/'

        # check Locations
        path = browser.find_element_by_link_text('Locations')
        path.click()
        assert browser.current_url == 'http://localhost:8080/locations'

        # check Artists
        browser.get('http://localhost:8080/')
        path = browser.find_element_by_link_text('Artists')
        path.click()
        assert browser.current_url == 'http://localhost:8080/artists'

        # check Concerts
        browser.get('http://localhost:8080/')
        path = browser.find_element_by_link_text('Concerts')
        path.click()
        assert browser.current_url == 'http://localhost:8080/concerts'

        # check About
        browser.get('http://localhost:8080/')
        path = browser.find_element_by_link_text('About')
        path.click()
        assert browser.current_url == 'http://localhost:8080/about'

    def test_locations_details(self):
        browser.get('http://localhost:8080/locations')
        assert browser.current_url == 'http://localhost:8080/locations'
        assert browser.page_source.find("Alpharetta") != -1
        assert browser.page_source.find("Anaheim") != -1

    def test_location_instance(self):
        browser.get('http://localhost:8080/locations/36')
        assert browser.page_source.find("Population") != -1
        assert browser.page_source.find("Timezone") != -1
        assert browser.page_source.find("Elevation") != -1


    def test_artists_details(self):
        browser.get('http://localhost:8080/artists')
        assert browser.current_url == 'http://localhost:8080/artists'
        assert browser.page_source.find("Alabama") != -1

    def test_arstist_intsance(self):
        browser.get('http://localhost:8080/artists/123')
        assert browser.current_url == 'http://localhost:8080/artists/123'
        assert browser.page_source.contains("hip hop")

    def test_concert_details(self):
        browser.get('http://localhost:8080/concerts')
        assert browser.current_url == 'http://localhost:8080/concerts'
        assert browser.page_source.find("Kevin Gates") != -1
        assert browser.page_source.find("Kayzo") != -1
        assert browser.page_source.find("Volbeat") != -1

    def test_concert_intsance(self):
        browser.get('http://localhost:8080/concerts/307')
        assert browser.page_source.find("Parking Notes") != -1

    def test_about_page(self):
        browser.get('http://localhost:8080/about')
        assert browser.current_url == 'http://localhost:8080/about'
        assert browser.page_source.find("Repository Stats") != -1
        assert browser.page_source.find("Data Sources") != -1
        assert browser.page_source.find("Tools") != -1


if __name__ == "__main__":
    main()