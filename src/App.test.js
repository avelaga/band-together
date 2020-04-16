/*npm i mocha
npm i -D chai
npm install --save-dev ignore-styles
npm i --save-dev mocha-jsdom */

import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect , should} from "chai";
var jsdom = require("mocha-jsdom");
const axios = require("axios").default;


var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./App');
//var should = chai.should();

chai.use(chaiHttp);


global.document = jsdom({
  url: "http://localhost:8080/",
  window: {}
});

import App from "./App";
import SplashPage from "./components/pages/SplashPage";
import AboutPage from "./components/pages/AboutPage";
import AboutCard from "./components/layout/AboutCard";
import ArtistListPage from "./components/pages/ArtistListPage";
import ArtistDetailPage from "./components/pages/ArtistDetailPage";
import ConcertListPage from './components/pages/ConcertListPage';
import ConcertDetailPage from "./components/pages/ConcertDetailPage";
import LocationListPage from './components/pages/LocationListPage';
import LocationDetailPage from "./components/pages/LocationDetailPage";
import LocationCard from './components/layout/LocationCard.js';
import { doesNotMatch } from "assert";



let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});


describe("Splash Page", function()  {


    it("Renders Site Title", () => {
      if (typeof window !== `undefined`) {
        const module = require("module")
      }
      act(() => {
        ReactDOM.render(<SplashPage />, rootContainer);
      });
      const h1 = rootContainer.querySelector("h1");
      expect(h1.textContent).to.equal("Band Together");
    });

    it("Renders Subtitle", () => {
      act(() => {
        ReactDOM.render(<SplashPage />, rootContainer);
      });
      const p = rootContainer.querySelector("p");
      expect(p.textContent).to.equal("Find the music you love");
    });
});

describe("About Page", function()  {

  it("Renders Purpose", () => {
   
      act(() => {
        ReactDOM.render(<AboutPage />, rootContainer);
      });
      const h1 = rootContainer.querySelectorAll("h1");
      expect(h1[0].textContent).to.equal("Our Purpose");
    });

    it("Renders About Cards", () => {
      act(() => {
        ReactDOM.render(<AboutPage />, rootContainer);
      });
      const h1 = rootContainer.querySelectorAll("h1");
      expect(h1[1].textContent).to.equal("Adam Martin");
      expect(h1[2].textContent).to.equal("Abhi Velaga");
      expect(h1[3].textContent).to.equal("Jason Moy");
      expect(h1[4].textContent).to.equal("Faezah Ali");
      expect(h1[5].textContent).to.equal("Gavin Rodrigue");
    });
  
    it("Renders About Card Images Correctly", () => {
      act(() => {
        ReactDOM.render(<AboutPage />, rootContainer);
      });
      const images = document.images;
      //expect(images[0].src).to.equal("http://localhost:8080/[object%20Object]");
    });
  
});


describe("Artist List Page", function()  {

  it("Artist List Renders", () => {
    act(() => {
      ReactDOM.render(<ArtistListPage />, rootContainer);
    });

  it("Artist List read", () => {
    chai.request('http://localhost:8080').get('/artists')
       .end(function(err, res){
         expect(res).to.have.status(200);
   });
  });
});
});

describe("Concert List Page", function()  {
  it("Concert List Page Renders", () => {
    act(() => {
      ReactDOM.render( <ConcertListPage />, rootContainer);
    });


  it("Concert List read", () => {
        chai.request('http://localhost:8080').get('/concerts')
        .end(function(err, res){
          expect(res).to.have.status(200);
   });
  });
});
});

describe("Location List Page", function()  {

  it("Location List Renders", () => {
    act(() => {
      ReactDOM.render(<LocationListPage />, rootContainer);
    });

  });

  it("Location list read", () => {
      chai.request('http://localhost:8080').get('/locations')
      .end(function(err, res){
        expect(res).to.have.status(200);
    });
  });

 });


 