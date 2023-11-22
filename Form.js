class Form {
  constructor() {
  this.input = createInput("").attribute("placeholder","Enter your name")
  this.playButton = createButton("Play")
  this.greeting = createElement("h2")
  }

  setElementsPosition(){
  this.input.position(width / 2 - 110, height / 2 - 80);
  this.playButton.position(width / 2 - 90, height / 2 - 20);
  this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
      this.input.class("customInput");
      this.playButton.class("customButton");
      this.greeting.class("greeting");
    }

    hide() {
      this.greeting.hide();
      this.playButton.hide();
      this.input.hide();
    }

    handleMousePressed() {
      this.playButton.mousePressed(()=>{
        this.input.hide();
        this.playButton.hide();
        playerObject.name = this.input.value();
        playerCount+=1;
        playerObject.index = playerCount;
        playerObject.addPlayer();
        playerObject.updateCount(playerCount);
        this.greeting.html("Hello " + playerObject.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
    }
  




  display(){
      // console.log("Hi")
      this.setElementsPosition()
      this.setElementsStyle()
      this.handleMousePressed()
    }



}