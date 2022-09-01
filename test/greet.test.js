import assert from "assert";
import greet from "../greet.js";

describe("Greet Function", function(){
    it("Should greet Archie", function(){
        assert.equal("Hello,cate", greet("cate"))
    })

    it("Should greet John", function(){
        assert.equal("Hello,winnie", greet("winnie"))
    })
})