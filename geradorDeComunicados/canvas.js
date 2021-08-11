let fontRegular, fontItalic, fontBold;
function setup() {
    cnv = createCanvas(1080 / 4, 1350 / 4);
    pixelDensity(4);

    alo = loadImage("assets/CaNormal.jpg");
    fontRegular = loadFont('./Roboto/Roboto-Regular.ttf');
    fontItalic = loadFont('./Roboto/Roboto-italic.ttf');
    fontBold = loadFont('./Roboto/Roboto-Black.ttf');



}
function draw() {
    strokeWeight(0);
    noStroke;
    scale(1 / 4);
    background("black");
    fill('#CDCCCC')
    rect(100, 0, 880, 1350)
    fill('#6B2010')
    rect(0, 0, 1350, 135)
    rect(0, 1350 - 135, 1350, 1350)
    textFont(fontBold)
    textSize(70)
    image(alo, 650, 800, 400, 400);
    fill("#EF7B63")
    rect(100, 135, 1080 - 200, 160, 0, 0, 50, 50)
    fill('#6B2010')
    text("COMUNICADO CA CIVIL", 150, 240)
    fill('#6B2010')
    rect(0, 135, 100, 1080)
    rect(980, 135, 100, 1080)
    fill('#CDCCCC')
    for (i = 0; i < 10; i++) {
        ellipse(1030, 220 + 100 * i, 30, 30)
        ellipse(50, 220 + 100 * i, 30, 30)
    }
    textFont(fontRegular)
    textSize(50)
    textLeading(80);
    fill('black')
    txt = "\n" + document.querySelector("textarea").value;
    text(txt, 180, 350, 750, 800)
}