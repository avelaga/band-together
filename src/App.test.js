/*npm i mocha
npm i -D chai
npm install --save-dev ignore-styles
npm i --save-dev mocha-jsdom 
./node_modules/.bin/mocha --require @babel/register,ignore-styles ./src/App.test.js*/

import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import { 	renderIntoDocument,
  findRenderedDOMComponentWithClass,
  scryRenderedComponentsWithType, act } from "react-dom/test-utils";
//import ReactTestUtils from 'react-dom/test-utils'; // ES6
var ReactTestUtils = require("react-dom/test-utils"); // ES5 with npm
import { expect , should} from "chai";
var jsdom = require("mocha-jsdom");


var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./App');
var assert = require('chai').assert;
//var should = chai.should();

chai.use(chaiHttp);


global.document = jsdom({
  url: "http://bandtogether.events",
  window: {}
});

import App from "./App";
import SplashPage from "./components/pages/SplashPage";
import AboutPage from "./components/pages/AboutPage";
import AboutCard from "./components/layout/AboutCard";
import ArtistListPage from "./components/pages/ArtistListPage";
import ArtistDetailPage from "./components/pages/ArtistDetailPage";
import ArtistCard from "./components/layout/ArtistCard";

import ConcertListPage from './components/pages/ConcertListPage';
import ConcertDetailPage from "./components/pages/ConcertDetailPage";
import LocationListPage from './components/pages/LocationListPage';
import LocationDetailPage from "./components/pages/LocationDetailPage";
import LocationCard from './components/layout/LocationCard.js';
import { doesNotMatch, AssertionError } from "assert";



// let rootContainer;

// beforeEach(() => {
//   rootContainer = document.createElement("div");
//   document.body.appendChild(rootContainer);
// });

// afterEach(() => {
//   document.body.removeChild(rootContainer);
//   rootContainer = null;
// });




describe("Splash Page", function()  {

    it ('renders Splash Page', function() {
      const component = renderIntoDocument(
        <SplashPage />
      );
      const splashElem = findRenderedDOMComponentWithClass(component, 'splash-back body');
      expect("splash-back body").to.be.ok;
    });

    it('should render a div with "splash-back body" class', () => {
      const component = renderIntoDocument(
        <SplashPage />
      );
      const splashElem = findRenderedDOMComponentWithClass(component, 'splash-back body');
      expect(splashElem.className).to.equal("splash-back body");
    });

    it('should render Site Title', () => {
      const component = renderIntoDocument(
        <SplashPage />
      );
      const splashElem = findRenderedDOMComponentWithClass(component, 'appear-fourth');
      expect(splashElem.textContent).to.equal("Band Together");
    });

    it('should render Site Subtitle', () => {
      const component = renderIntoDocument(
        <SplashPage />
      );
      const splashElem = findRenderedDOMComponentWithClass(component, 'appear-sixth');
      expect(splashElem.textContent).to.equal("Find the music you love");
    });
    
  });

// describe("About Page", function()  {
//   it ('renders About Page', function() {
//     const component = renderIntoDocument(
//       <AboutPage />
//     );
//     console.log(component)

//     const aboutElem = scryRenderedDOMComponentsWithClass(component, 'div');

//     expect("div").to.be.ok;
//   });

//   it('should render about blurb', () => {
//     const component = renderIntoDocument(
//       <AboutPage />
//     );
//     const aboutElem = scryRenderedDOMComponentsWithClass(component, 'appear-second');
//     expect(aboutElem.textContent.length).to.equal(350);
//   });

//   it('should render About Cards', () => {
//     const component = renderIntoDocument(
//       <AboutPage />
//     );
//     const aboutElem = findRenderedDOMComponentWithClass(component, 'flex appear-third');
//     expect(aboutElem.textContent).to.equal("Band Together");
//   });

//   it('should render Repository Stats', () => {
//     const component = renderIntoDocument(
//       <AboutPage />
//     );
//     const aboutElem = findRenderedDOMComponentWithClass(component, 'appear-sixth');
//     expect(aboutElem.textContent).to.equal("Repository Stats");
//   });
  

// });

//   // it("Renders Purpose", () => {
   
//   //     act(() => {
//   //       ReactDOM.render(<AboutPage />, rootContainer);
//   //     });
//   //     //console.log(rootContainer)
//   //     const h1 = rootContainer.querySelectorAll("h1");
//   //     expect(h1[0].textContent).to.equal("Our Purpose");
      
//   //   });

//   //   it("Renders About Cards", () => {
//   //     act(() => {
//   //       ReactDOM.render(<AboutPage />, rootContainer);
//   //     });
//   //     const h1 = rootContainer.querySelectorAll("h1");
//   //     expect(h1[1].textContent).to.equal("Adam Martin");
//   //     expect(h1[2].textContent).to.equal("Abhi Velaga");
//   //     expect(h1[3].textContent).to.equal("Jason Moy");
//   //     expect(h1[4].textContent).to.equal("Faezah Ali");
//   //     expect(h1[5].textContent).to.equal("Gavin Rodrigue");
//   //   });

//     // it("About Page renders", () => {
//     //   chai.request('http://bandtogether.events').get('/about')
//     //     .end(function(err, res) {
//     //       expect(res).to.have.status(200);
//     //   });
//     // });
  
//     // it("Renders About Card Images Correctly", () => {
//     //   act(() => {
//     //     ReactDOM.render(<AboutPage />, rootContainer);
//     //   });
//     //   //const images = document.images;
//     //   const images2 = document.getElementsByTagName('img');
//     //   var images = Array.from(images2)
//     //   //console.log(images[0].alt)
//     //   //expect(images[0].src).to.equal("http://localhost:8080/[object%20Object]");
//     // });


describe("Artist List Page", function()  {

  it("Artist List read", () => {
      chai.request('http://bandtogether.events').get('/artists')
          .end(function(err, res) {
           expect(res).to.have(status);
          });
  });

  it('should render Artists title', () => {
    const component = renderIntoDocument(
      <ArtistListPage />
    );
    const splashElem = findRenderedDOMComponentWithClass(component, 'appear-second');
    expect(splashElem.textContent).to.equal("Artists");
  });

  it('should render Artists Cards', () => {
    const component = renderIntoDocument(
      <ArtistListPage />
    );
    const splashElem = scryRenderedComponentsWithType(component, ArtistCard);
    expect(splashElem.length).to.equal(ArtistCard.length);
  });

});


describe("Artist Detail Page", function()  {

  it("Artist Detail render", () => {
    chai.request('http://bandtogether.events').get('/artists/1')
       .end(function(err, res) {
         expect(res).to.have.status(200);
   });
  });

  it("Artist Detail read", () => {
    chai.request('http://bandtogether.events').get('/artists/1')
       .end(function(err, res) {
        expect(res.body).to.be.a('object');
        //expect(res.body).to.have('name') 
   });
  });

  it("Artist ID = 1 Renders Tame Impala", () => {
    chai.request('http://bandtogether.events').get('/artists/1')
       .end(function(err, res) {
        expect(res.body).to.be.a('object');
        //expect(res.body).to.have('name');
        expect(res.body.name).to.be('Tame Impala');
        });
    });

   it("Artist ID = 1 Renders Correct ID", () => {
    chai.request('http://bandtogether.events').get('/artists/1')
       .end(function(err, res) {
        expect(res.body).to.be.a('object');
        expect(res.body.id).to.be(1);
        });
    });

    it("Artist ID = 2 Renders The Lumineers", () => {
      chai.request('http://bandtogether.events').get('/artists/2')
         .end(function(err, res) {
          expect(res.body).to.be.a('object');
          expect(res.body.name).to.be('The Lumineers');
          });
      });
  
     it("Artist ID = 2 Renders Correct ID", () => {
      chai.request('http://bandtogether.events').get('/artists/2')
         .end(function(err, res) {
          expect(res.body).to.be.a('object');
          expect(res.body.id).to.equal(2);
          });
      });

});

describe("Concert List Page", function()  {
  // it("Concert List Page Renders", () => {
  //   act(() => {
  //     ReactDOM.render( <ConcertListPage />, rootContainer);
  //   });
  // });

  it("Concert List read", () => {
        chai.request('http://bandtogether.events').get('/concerts')
        .end(function(err, res){
          expect(res).to.have.status(200);
   });
  });

});

describe("Concert Detail Page", function()  {

  it("Concert Detail render", () => {
    chai.request('http://bandtogether.events').get('/concerts/1')
       .end(function(err, res) {
         expect(res).to.have.status(200);
         
   });
  });

  it("Concert Detail read", () => {
    chai.request('http://bandtogether.events').get('/concerts/1')
       .end(function(err, res) {
        expect(res.body).to.be.a('object');
        //expect(res.body).to.have('name') 
   });
  });

  it("Concert ID = 1 Renders Chris Stapleton", () => {
    chai.request('http://bandtogether.events').get('/concerts/1')
       .end(function(err, res) {
        expect(res.body).to.be.a('object');
       // expect(res.body).to.have('name');
        expect(res.body.name).to.equal('Chris Stapleton');
        });
    });

   it("Concert ID = 1 Renders Correct ID", () => {
    chai.request('http://bandtogether.events').get('/concerts/1')
       .end(function(err, res) {
        expect(res.body).to.be.a('object');
        //expect(res.body).to.have('id');
        expect(res.body.id).to.be(1);
        });
    });

    it("Concert ID = 2 Renders Chris Stapleton", () => {
      chai.request('http://bandtogether.events').get('/concerts/2')
         .end(function(err, res) {
          expect(res.body).to.be.a('object');
          //expect(res.body).to.have.property('name');
          expect(res.body.name).to.be('Chris Stapleton');
          });
      });
  
     it("Concert ID = 2 Renders Correct ID", () => {
      chai.request('http://bandtogether.events').get('/concerts/2')
         .end(function(err, res) {
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.property('id');
          expect(res.body.id).to.be(2);
          });
      });

});

describe("Location List Page", function()  {

  // it("Location List Renders", () => {
  //   act(() => {
  //     ReactDOM.render(<LocationListPage />, rootContainer);
  //   });

  // });

  it("Location list read", () => {
      chai.request('http://bandtogether.events').get('/locations')
      .end(function(err, res){
        expect(res).to.have.status(200);
    });
  });

  it("Location ID = 1 Renders Denver", () => {
    chai.request('http://bandtogether.events').get('/locations/1')
       .end(function(err, res) {
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('name');
        expect(res.body.name).to.equal('Denver');
        });
    });

   it("Location ID = 1 Renders Correct ID", () => {
    chai.request('http://bandtogether.events').get('/locations/1')
       .end(function(err, res) {
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('id');
        expect(res.body.id).to.equal(1);
        });
    });

    it("Location ID = 2 Renders Knoxville", () => {
      chai.request('http://bandtogether.events').get('/loctions/2')
         .end(function(err, res) {
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.property('name');
          expect(res.body.name).to.equal('Knoxville');
          });
      });
  
     it("Location ID = 2 Renders Location ID", () => {
      chai.request('http://bandtogether.events').get('/locations/2')
         .end(function(err, res) {
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.property('id');
          expect(res.body.id).to.equal(2);
          });
      });

 });


 