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

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("Load Pages", function()  {

    it("should load splash page without error", function()  {
      chai.request('http://localhost:8080/').get('/')
      .end(function(err, res){
        //expect(res).to.have.status(200);
        res.should.have.status(200);
        if 
        //done();
      });
      });

    it("should load about page without error", function()  {
      chai.request('http://localhost:8080/').get('/about')
      .end(function(res){
        res.should.have.status(200);
      });
    });

    it("should load location list page without error", function()  {
      chai.request('http://localhost:8080/').get('/locations')
      .end(function(res){
        res.should.have.status(200);
      });
    });

    it("should load location detail page without error", function()  {
      chai.request('http://localhost:8080/').get('/locations/:id')
      .end(function(res){
        res.should.have.status(200);
      });
    });

    it("should load artists list page without error", function()  {
      chai.request('http://localhost:8080/').get('/artists')
      .end(function(res){
        res.should.have.status(200);
      });
    });

    it("should load artists detail page without error", function()  {
      chai.request('http://localhost:8080/').get('/artists/:id')
      .end(function(res){
        res.should.have.status(200);
      });
    });

    it("should load concert list page without error", function()  {
      chai.request('http://localhost:8080/').get('/concerts')
      .end(function(res){
        res.should.have.status(200);
      });
    });

    it("should load concerts detail page without error", function()  {
      chai.request('http://localhost:8080/').get('/concerts/:id')
      .end(function(res){
        res.should.have.status(200);
        done();
      });
    });

  });


  // it("Renders Hello World Title", () => {
  //   act(() => {
  //     ReactDOM.render(<App />, rootContainer);
  //   });
  //   const h1 = rootContainer.querySelector("h1");
  //   expect(h1.textContent).to.equal("Hello World");
  // });

//});


/* <Route exact path='/locations/:id' exact component={LocationDetailPage} />
      <Route exact path='/artists' exact component={ArtistListPage} />
      <Route exact path='/artists/:id' exact component={ArtistDetailPage} />
      <Route exact path='/concerts' exact component={ConcertListPage} />
      <Route exact path='/concerts/:id' ex */
