import setAttributes from "./utils/setAttrs.js";
import jillGif from "./assets/img/jill-jill-fumo.gif";
import jillVidWebpack from "./assets/video/glitch-anime.mp4";
import almaVidWebpack from "./assets/video/va11halla-alma.mp4";
import dorothyVidWebpack from "./assets/video/va11halla-dorothy.mp4";
import dorothyVidWebpack2 from "./assets/video/valhalla-persona.mp4";

const about = (content) => {
  const body = document.createElement("div");
  body.classList.add("body");

  const headline = document.createElement("div");
  headline.classList.add("about", "headline");
  headline.textContent = "About VA-11 Hall-A";

  const jillVid = document.createElement("video");
  setAttributes(jillVid, { autoplay: "", muted: "", loop: "", class: "vid" });
  const jillVidSrc = document.createElement("source");
  setAttributes(jillVidSrc, { src: jillVidWebpack, type: "video/mp4" });
  jillVid.appendChild(jillVidSrc);

  const text1 = document.createElement("div");
  text1.classList.add("about", "text");
  const text1p1 = document.createElement("p");
  text1p1.textContent = `VA-11 HALL-A: Cyberpunk Bartender Action is a booze em' up about waifus, 
        technology, and post-dystopia life.`;
  const text1p2 = document.createElement("p");
  text1p2.textContent = `In this world, corporations reign supreme, 
        all human life is infected with nanomachines designed to oppress them, 
        and the terrifying White Knights ensure that everyone obeys the laws.`;
  const text1p3 = document.createElement("p");
  text1p3.textContent = `But, this is not about those people.`;
  text1.append(text1p1, text1p2, text1p3);

  const almaVid = document.createElement("video");
  setAttributes(almaVid, { autoplay: "", muted: "", loop: "", class: "vid" });
  const almaVidSrc = document.createElement("source");
  setAttributes(almaVidSrc, { src: almaVidWebpack, type: "video/mp4" });
  almaVid.appendChild(almaVidSrc);

  const text2 = document.createElement("div");
  text2.classList.add("about", "text");
  const text2p1 = document.createElement("p");
  text2p1.textContent = `You are a bartender at VA-11 HALL-A, affectionately nicknamed "Valhalla."
        Although it is just a small bar downtown, 
        it attracts the most fascinating people this side of dystopia.
        Keep your clients lubricated and you will be made privy to the most interesting stories.`;
  text2.append(text2p1);

  const offer = document.createElement("div");
  offer.classList.add("offer");

  const vids = document.createElement("div");
  vids.classList.add("portrait-container");

  const dorothyVid = document.createElement("video");
  setAttributes(dorothyVid, {
    autoplay: "",
    muted: "",
    loop: "",
    class: "portrait",
  });
  const dorothyVidSrc = document.createElement("source");
  setAttributes(dorothyVidSrc, { src: dorothyVidWebpack, type: "video/mp4" });
  dorothyVid.appendChild(dorothyVidSrc);

  const dorothyVid2 = document.createElement("video");
  setAttributes(dorothyVid2, {
    autoplay: "",
    muted: "",
    loop: "",
    class: "portrait toggle",
  });
  const dorothyVidSrc2 = document.createElement("source");
  setAttributes(dorothyVidSrc2, { src: dorothyVidWebpack2, type: "video/mp4" });

  dorothyVid2.appendChild(dorothyVidSrc2);
  vids.append(dorothyVid, dorothyVid2);

  const signUp = document.createElement("div");
  signUp.classList.add("sign-up");
  const plushText = document.createElement("div");
  plushText.classList.add("plush", "text");
  plushText.textContent = `Sign up now and get FREE Jill plushie!!!`;
  const plushImg = document.createElement("img");
  setAttributes(plushImg, {
    src: jillGif,
    alt: "jill plushie",
    class: "plush-img",
  });
  const button = document.createElement("button");
  button.classList.add("plush", "btn");
  button.textContent = `Click here!`;
  button.addEventListener("mouseover", () => {
    dorothyVid2.classList.remove("toggle");
    dorothyVid.classList.add("toggle");
  });
  button.addEventListener("mouseleave", () => {
    dorothyVid2.classList.add("toggle");
    dorothyVid.classList.remove("toggle");
  });
  button.addEventListener("click", () => {
    window.open("https://miran-mirantee.github.io/sign-up-form/");
  });

  signUp.append(plushText, plushImg, button);
  offer.append(vids, signUp);

  body.append(headline, jillVid, text1, almaVid, text2, offer);
  content.appendChild(body);
};

export default about;
