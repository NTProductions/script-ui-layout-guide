var buttonSize = [25, 25];

var window = new Window("palette", "", undefined);
window.orientation = "column";

var panelGroupOne = window.add("group", undefined, "panelGroupOne");
panelGroupOne.orientation = "row";

var panelOne = panelGroupOne.add("panel", undefined, "Panel One");
panelOne.orientation = "row";
var panelOneGroupOne = panelOne.add("group", undefined, "panelGroupOne");
panelOneGroupOne.orientation = "row";
var buttonOne = panelOneGroupOne.add("button", undefined, "1");
buttonOne.size = buttonSize;
var buttonTwo = panelOneGroupOne.add("button", undefined, "2");
buttonTwo.size = buttonSize;
var buttonThree = panelOneGroupOne.add("button", undefined, "3");
buttonThree.size = buttonSize;
var panelOneGroupTwo = panelOne.add("group", undefined, "panelGroupTwo");
panelOneGroupTwo.orientation = "column";
var buttonFour = panelOneGroupTwo.add("button", undefined, "4");
buttonFour.size = buttonSize;
var buttonFive = panelOneGroupTwo.add("button", undefined, "5");
buttonFive.size = buttonSize;

var panelTwo = panelGroupOne.add("panel", undefined, "Panel Two");
panelTwo.orientation = "row";
var buttonSix = panelTwo.add("button", undefined, "6");
buttonSix.size = buttonSize;
var buttonSeven = panelTwo.add("button", undefined, "7");
buttonSeven.size = buttonSize;

var panelThree = window.add("panel", undefined, "Panel Three");
panelThree.orientation = "column";
var panelThreeGroupOne = panelThree.add("group", undefined, "panelThreeGroupOne");
panelThreeGroupOne.orientation = "row";
var buttonEight = panelThreeGroupOne.add("button", undefined, "8");
buttonEight.size = buttonSize;
var buttonNine = panelThreeGroupOne.add("button", undefined, "9");
buttonNine.size = buttonSize;
var buttonTen = panelThreeGroupOne.add("button", undefined, "10");
buttonTen.size = buttonSize;
var buttonEleven = panelThreeGroupOne.add("button", undefined, "11");
buttonEleven.size = buttonSize;
var panelThreeGroupTwo = panelThree.add("group", undefined, "panelThreeGroupTwo");
panelThreeGroupTwo.orientation = "row";
var buttonTwelve = panelThreeGroupTwo.add("button", undefined, "12");
buttonTwelve.size = buttonSize;
var buttonThirteen = panelThreeGroupTwo.add("button", undefined, "13");
buttonThirteen.size = buttonSize;
var buttonFourteen = panelThreeGroupTwo.add("button", undefined, "14");
buttonFourteen.size = buttonSize;
var buttonFifteen = panelThreeGroupTwo.add("button", undefined, "15");
buttonFifteen.size = buttonSize;

window.center();
window.show();