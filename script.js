const clearsearch = document.querySelector(".clearsearch");
const input = document.getElementsByTagName('input')[0];
const searchbox = document.querySelector(".searchbox");
const playContainer = document.querySelector(".playContainer");
const playListContainer = document.getElementById("playListContainer");
// const audiotag = document.getElementsByTagName("audio")[0];
const audiotag = document.getElementsByClassName("audioTag")[0];
const shuffleBtn = document.querySelector(".shuffle")
const playbtn = document.querySelector(".play");
const pausebtn = document.querySelector(".pause");
const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
const trackImageandTitle = document.querySelector(".trackImageandTitle");
const trackImage = document.querySelector(".trackImage");
const trackTitle = document.querySelector(".playtrackTitle");
const trackSinger = document.querySelector(".trackSinger");
const currentAndTotleTimeTag = document.querySelector(".currentAndTotleTime");
const currentduration = document.querySelector(".currentduration");
const currentTime = document.querySelector(".currentTime");
const trackListDivStyleTag = document.querySelector(".trackListDivStyle");
const progressBarTag = document.querySelector(".progressBar");
const resultContainerTag = document.querySelector(".resultContainer");

let currentPlayingIndex = 0;
let isPlaying = true;


// for Search Box 
clearsearch.addEventListener("click", () => {
    input.value = "";
});
input.addEventListener("focus", () => {
    searchbox.classList.add("sboxborder");
})
clearsearch.addEventListener("focus", () => {
    searchbox.classList.add("sboxborder");
})
input.addEventListener("blur", () => {
    searchbox.classList.remove("sboxborder");
})
clearsearch.addEventListener("blur", () => {
    searchbox.classList.remove("sboxborder");
})

// Songs Using Array List
const tracks = [{
        id: 1,
        trackID: "music/DJ Khaled - I'm The One ft. Justin Bieber.mp3",
        title: "I'm The One",
        duration: "05:21",
        singer: "Justin Bieber",
        background: "image/1.jpg"
    },
    {
        id: 2,
        trackID: "music/အချစ်အတွက်တဖန်မွေးဖွားခြင်း-စိုင်းထီးဆိုင်.mp3",
        title: "အချစ်တွက်တဖန်မွေးဖွားခြင်း",
        duration: "03:23",
        singer: "စိုင်းထီးဆိုင်",
        background: "image/2.jpg"
    },
    {
        id: 3,
        trackID: "music/ရှမ်းစကားလေးနဲ့နှုတ်ဆက်ကြတယ်-စိုင်းဆိုင်မောဝ်.mp3",
        title: "ရှမ်းစကားလေးနဲ့နှုတ်ဆက်မယ်",
        duration: "03:18",
        singer: "စိုင်းဆိုင်မောဝ်",
        background: "image/3.jpg"
    },
    {
        id: 4,
        trackID: "music/ချယ်ရီကိုသာပန်ပါကွယ်.mp3",
        title: "ချယ်ရီကိုသာပန်ပါကွယ်",
        duration: "04:19",
        singer: "စိုင်းထီးဆိုင်",
        background: "image/4.jpg"
    },
    {
        id: 5,
        trackID: "music/ဘိုဖြူ-နေဝင်ချိန်.mp3",
        title: "နေဝင်ချိန်",
        duration: "04:17",
        singer: "ဘိုဖြူ",
        background: "image/5.jpg"
    },
    {
        id: 6,
        trackID: "music/တစ်ရက်တော့ငိုပါ - ဆောင်းဦးလှိုင် + မို့မို့ .mp3",
        title: "တစ်ရက်တော့ငိုပါ",
        duration: "03:34",
        singer: "ဆောင်းဦးလှိုင်",
        background: "image/6.jpg"
    },
    {
        id: 7,
        trackID: "music/တိုးတိုးလေးပြောပါ-ဖိုးကာ.mp3",
        title: "တိုးတိုးလေးပြောပါ",
        duration: "03:50",
        singer: "ဖိုးကာ",
        background: "image/7.jpg"
    },
    {
        id: 8,
        trackID: "music/ရိုးရှင်းသောဘဝ-မျိုးကြီး.mp3",
        title: "ရိုးရှင်းသောဘဝ",
        duration: "4:10",
        singer: "မျိုးကြီး",
        background: "image/8.jpg"
    },
    {
        id: 9,
        trackID: "music/အပြာရောင်ည - မျိုးကြီး.mp3",
        title: "အပြာရောင်ည",
        duration: "03:41",
        singer: "မျိုးကြီး",
        background: "image/9.jpg"
    },
    {
        id: 10,
        trackID: "music/ဖန်သားနန်းတော်-black hole.mp3",
        title: "ဖန်သားနန်းတော်",
        duration: "03:17",
        singer: "black hole",
        background: "image/10.jpg"
    }

];

// trackDiv background
for (let i = 0; i < tracks.length; i++) {
    const trackDiv = document.createElement("button");
    trackDiv.classList.add("trackDivStyle");
    const trackDivbackground = tracks[i].background;
    trackDiv.style.backgroundImage = "url('" + trackDivbackground + "')";
    playListContainer.append(trackDiv);
    trackDiv.addEventListener("click", () => {
        currentPlayingIndex = i;
        playSong();
        trackImageandTitleInsert();
    });
};

// Images and Song Titles Insert into Music Player Box (Function)
const trackImageandTitleInsert = () => {
        trackImage.src = tracks[currentPlayingIndex].background;
        trackImageandTitle.append(trackImage);
        trackTitle.textContent = tracks[currentPlayingIndex].title;
        trackImageandTitle.append(trackTitle);
        trackSinger.textContent = tracks[currentPlayingIndex].singer;
        trackImageandTitle.append(trackSinger);
    }
    // Top Song List (10) 
for (let i = 0; i < tracks.length; i++) {
    const list = document.querySelector("#list");
    const listLength = tracks.length;
    list.innerHTML = listLength;
}

// trackTitle 
for (let i = 0; i < tracks.length; i++) {
    const trackText = document.createElement("div");
    trackText.classList.add("trackTitle");
    trackText.textContent = tracks[i].title;
    playListContainer.append(trackText);
}
// Singer and Download Button in Track Bar
for (let i = 0; i < tracks.length; i++) {
    const singer = document.createElement("div");
    singer.classList.add("singer");
    singer.textContent = tracks[i].singer;
    playListContainer.append(singer);
    singer.addEventListener("click", () => {
        let text = "Download this song?";
        if (confirm(text) == true) {
            const downloadLink = document.createElement("a");
            const download = downloadLink.href = tracks[i].trackID;
            downloadLink.download = download;
            downloadLink.click();
        } else {
            confirm == false;
        }
    })
}

// Load Duration Of Songs
let duration = 0;
audiotag.addEventListener("loadeddata", () => {
    duration = Math.floor(audiotag.duration);
    const durationText = createMinuteandSecondText(duration);
    currentTime.textContent = durationText;
});
// Load Current Time of Songs
audiotag.addEventListener("timeupdate", () => {
    const currentTime = Math.floor(audiotag.currentTime);
    const currentTimeText = createMinuteandSecondText(currentTime);
    currentduration.textContent = currentTimeText;
    updateCurrentProgress(currentTime);
});
const updateCurrentProgress = (currentTime) => {
    const currentProgressWidth = (100 / duration) * currentTime;
    progressBarTag.value = currentProgressWidth;
}

createMinuteandSecondText = (totalSecond) => {
    const minutes = Math.floor(totalSecond / 60);
    const seconds = totalSecond % 60;
    const minuteText = minutes < 10 ? "0" + minutes : minutes;
    const secondText = seconds < 10 ? "0" + seconds : seconds;
    return minuteText + ":" + secondText;
};

// Play Button 
playbtn.addEventListener("click", () => {
    const currentTime = Math.floor(audiotag.currentTime);
    if (currentTime == 0) {
        playSong();
        trackImageandTitleInsert();
    } else {
        audiotag.play();
        isPlaying = true;
        updatePlayAndPauseButton();
        currentPlayingIndex += 1;
    }
});

// Pause Button 
pausebtn.addEventListener("click", () => {
    isPlaying = false;
    audiotag.pause();
    updatePlayAndPauseButton();
});

// To Play Songs (Function)
const playSong = () => {
    const songIdToPlay = tracks[currentPlayingIndex].trackID;
    audiotag.src = songIdToPlay;
    audiotag.play();
    isPlaying = true;
    updatePlayAndPauseButton();
};

// To Display Play Button and Pause Button alternate (Function)
const updatePlayAndPauseButton = () => {
    if (isPlaying) {
        playbtn.style.display = "none";
        pausebtn.style.display = "inline"
    } else {
        playbtn.style.display = "inline";
        pausebtn.style.display = "none";
    }
};

// Previous Button
previousBtn.addEventListener("click", () => {
    if (currentPlayingIndex === 0) {
        return;
    }
    currentPlayingIndex -= 1;
    playSong();
    trackImageandTitleInsert();
});

// Next Button
nextBtn.addEventListener("click", () => {
    if (currentPlayingIndex === tracks.length - 1) {
        return;
    }
    currentPlayingIndex += 1;
    playSong()
    trackImageandTitleInsert();
});

// ShuffleBtn
shuffleBtn.addEventListener("click", () => {
    const currentTime = Math.floor(audiotag.currentTime);
    if (currentTime === audiotag.duration) {
        currentPlayingIndex += 1;
        playSong()
        trackImageandTitleInsert();
    }
});

// Volume Button 
let volumeBtn = document.querySelector(".volume");
let volumeRangeAndTextTag = document.querySelector(".volumeRangeAndText");
let volume = document.querySelector("#volume-control");
let volumeText = document.querySelector(".volumeText");
let formRange = document.querySelector(".form-range");
volumeText.innerHTML = volume.value;
volume.addEventListener("change", function(e) {
    audiotag.volume = e.currentTarget.value / 100;
    volumeText.innerHTML = e.currentTarget.value;
});
// To Display and Disappear Volume Button 
volumeBtn.addEventListener("click", () => {
    volumeRangeAndTextTag.style.display = "flex";
    setTimeout(() => {
        volumeRangeAndTextTag.style.display = 'none';
    }, 8000);
});

// Songs List Box
for (let i = 0; i < tracks.length; i++) {
    const trackListContainer = document.querySelector("#tracklist")
    const trackListDiv = document.createElement("div");
    trackListDiv.classList.add("trackListDivStyle");
    const listImage = document.createElement("img");
    trackListDiv.append(listImage);
    listImage.classList.add("listImage");
    listImage.src = tracks[i].background;
    const listTitle = document.createElement("div");
    listTitle.classList.add("listTitle");
    trackListDiv.append(listTitle);
    listTitle.innerHTML = tracks[i].title;
    const listSinger = document.createElement("div");
    listSinger.classList.add("listSinger");
    trackListDiv.append(listSinger);
    listSinger.innerHTML = tracks[i].singer;
    const listDuration = document.createElement("div");
    listDuration.classList.add("listDuration")
    trackListDiv.append(listDuration);
    listDuration.innerHTML = tracks[i].duration;
    const listPlayBtn = document.createElement("button");
    listPlayBtn.classList.add("listPlayBtnStyle");
    const listPlayI = document.createElement("i");
    listPlayI.classList.add('bi-play-circle');
    listPlayBtn.append(listPlayI);
    trackListDiv.append(listPlayBtn);
    listPlayBtn.addEventListener("click", () => {
        currentPlayingIndex = i;
        isPlaying = true;
        playSong();
        trackImageandTitleInsert();
        trackListDiv.style.backgroundColor = "#87CEEB";
    })
    listDuration.innerHTML = tracks[i].duration;
    const listDownLoadBtn = document.createElement("i");
    listDownLoadBtn.classList.add("bi-cloud-download")
    trackListDiv.append(listDownLoadBtn);
    const listFavBtn = document.createElement("i");
    listFavBtn.classList.add("bi-heart-fill");
    listFavBtn.addEventListener("click", () => {
        if (listFavBtn.classList.contains("IsOpened")) {
            listFavBtn.style.color = "#63b4eb";
            listFavBtn.classList.remove("IsOpened");
        } else {
            listFavBtn.style.color = "blue";
            listFavBtn.classList.add("IsOpened");
        }

    });
    trackListDiv.append(listFavBtn);
    trackListContainer.append(trackListDiv);
}
// autocomplete
let filterProduct = [];
input.addEventListener("keyup", (eventKeyword) => {
    if (
        eventKeyword.key === "ArrowDown" ||
        eventKeyword.key === "ArrowUp" ||
        eventKeyword.key === "Enter"
    ) {
        navigateAndSelectProduct(eventKeyword.key);
        return;
    }
    resultContainerTag.innerHTML = "";
    const searchText = eventKeyword.target.value.toLowerCase();
    if (searchText.length === 0) {
        return;
    }
    filterProduct = tracks.filter((product) => product.title.toLowerCase().includes(searchText));

    const hasProductsToShow = filterProduct.length > 0;
    if (hasProductsToShow) {

        for (let i = 0; filterProduct.length > i; i++) {
            const productItemContainerTag = document.createElement("div");
            productItemContainerTag.id = filterProduct[i].id;
            productItemContainerTag.classList.add("productItemContainer");
            const searchResultTitle = filterProduct[i].title;
            productItemContainerTag.append(searchResultTitle);
            resultContainerTag.append(productItemContainerTag);
        }
    }
});
let indexToSelect = -1;
const navigateAndSelectProduct = (key) => {
    if (key === "ArrowDown") {
        if (indexToSelect === filterProduct.length - 1) {
            indexToSelect = -1;
            deselectProduct();
            return;
        }
        indexToSelect += 1;
        const productItemContainerToSelect = selectProduct(indexToSelect);
        if (indexToSelect > 0) {
            deselectProduct();
        }
        productItemContainerToSelect.classList.add("selected");

    } else if (key === "ArrowUp") {
        if (indexToSelect === 0) {
            return;
        }
        indexToSelect -= 1;
        productItemContainerToSelect.classList.add("selected");
        deselectProduct();
        selectProduct(indexToSelect);
    } else {

    }
}
const selectProduct = (index) => {
    const productIdToSelect = filterProduct[index].id.toString();
    const productItemContainerToSelect = document.getElementById(productIdToSelect);
    productItemContainerToSelect.style.backgroundColor = "pink";
    productItemContainerToSelect.style.color = "white";
    return productItemContainerToSelect;
}
const deselectProduct = () => {
    const productToDeselect = document.getElementsByClassName("selected")[0];
    productToDeselect.style.backgroundColor = "white";
    productToDeselect.style.color = "black";
    productToDeselect.classList.remove("selected");
}
