var tape = require("tape")
var CSSTransformString = require("..")

tape("CSSTransformString", function(test){
  test.equal(
    CSSTransformString({scale : 2, rotate : "5deg", translate:["50%", "10%"]}),
    "scale(2) rotate(5deg) translate(50%,10%)",
    "interprets type"
  )
  test.equal(
    CSSTransformString(
      {scale : 2, rotate : "5deg", translate:["50%", "10%"]},
      {scale : .5}
    ),
    "scale(2) rotate(5deg) translate(50%,10%) scale(0.5)",
    "interprets follows the right order"
  )
  test.equal(
    CSSTransformString(
      {scale : 2, yolo: 1},
      {translateX : "10%", wut : "2px"}
    ),
    "scale(2) translateX(10%)",
    "ignores non-transform properties"
  )
  test.equal(
    CSSTransformString(),
    "none",
    "returns \"none\" if nothing is passed"
  )
  test.equal(
    CSSTransformString(null),
    "none",
    "returns \"none\" if `null` is passed"
  )
  test.equal(
    CSSTransformString("scale(2)", {translateX:"20px"}),
    "scale(2) translateX(20px)",
    "can use pass strings through as first argument"
  )
  test.equal(
    CSSTransformString({translateX:"20px"}, "scale(2)"),
    "translateX(20px) scale(2)",
    "can use pass strings through for any argument"
  )
  test.end()
})
