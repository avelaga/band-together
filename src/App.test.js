/*npm i mocha
npm i -D chai
npm install --save-dev ignore-styles
npm i --save-dev mocha-jsdom */

import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect , should} from "chai";
var jsdom = require("mocha-jsdom");


var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./App');
//var should = chai.should();

chai.use(chaiHttp);


global.document = jsdom({
  url: "http://localhost:8080/"
});

import App from "./App";
import SplashPage from "./components/pages/SplashPage";

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
//            <p>Find the music you love</p>


    // it('should load splash page without error', function(done) {
    //   chai.request('http://localhost:8080').
    //     .get('/blobs')
    //     .end(function(err, res){
    //       res.should.have.status(200);
    //       done();
    //     });
    // });
    // it("should load splash page without error", function()  {
    //   chai.request('http://localhost:8080').get('')
    //   .end(function(err, res){
    //     //expect(res).to.have.status(200);
    //     expect(res).to.have.status(200);        //done();
    //   });
    //   });

    // it("should load about page without error", function()  {
    //   chai.request('http://localhost:8080').get('/about')
    //   .end(function(err, res){
    //     expect(res).to.have.status(200);
    //   });
    // });

    // it("should load location list page without error", function()  {
    //   chai.request('http://localhost:8080').get('/locations')
    //   .end(function(err, res){
    //     //res.should.have.status(200);
    //     expect(res).to.have.status(200);

    //   });
    // });

    // it("should load location detail page without error", function()  {
    //   chai.request('http://localhost:8080').get('/locations/:id')
    //   .end(function(err, res){
    //     expect(res).to.have.status(200);
    //   });
    // });

    // it("should load artists list page without error", function()  {
    //   chai.request('http://localhost:8080').get('/artists')
    //   .end(function(err, res){
    //     expect(res).to.have.status(200);

    //   });
    // });

    // it("should load artists detail page without error", function()  {
    //   chai.request('http://localhost:8080').get('/artists/:id')
    //   .end(function(err, res){
    //     expect(res).to.have.status(200);

    //   });
    // });

    // it("should load concert list page without error", function()  {
    //   chai.request('http://localhost:8080').get('/concerts')
    //   .end(function(err, res){
    //     expect(res).to.have.status(200);

    //   });
    // });

    // it("should load concerts detail page without error", function()  {
    //   chai.request('http://localhost:8080').get('/concerts/:id')
    //   .end(function(err, res){
    //     expect(res).to.have.status(200);

    //     //done();
    //   });
    // });

  });


 

//});

