chrome.runtime.sendMessage({
    myQuestion: "Is it ON or OFF?"
}, function (response) {
    if (response.state != 1) return;

    let url = location.href;
    const engelList = "-site:msn.com -site:internethaber.com -site:fotomac.com.tr -site:tgrthaber.com.tr -site:aksam.com.tr -site:trthaber.com -site:star.com.tr -site:ahaber.com.tr -site:sporx.com -site:gazetevatan.com -site:sozcu.com.tr -site:haberturk.com -site:mynet.com -site:acunn.com -site:haber7.com -site:sabah.com.tr -site:yenisafak.com -site:hurriyet.com.tr -site:cnnturk.com -site:youtube.com -site:pinterest.com -site:milliyet.com.tr -site:haberler.com -site:posta.com.tr -site:fanatik.com.tr -site:cumhuriyet.com.tr -site:takvim.com.tr -site:ensonhaber.com -site:sondakika.com -site:t24.com.tr -site:ntv.com.tr";
    const engellenen = encodeURI(engelList);

    function betweenMarkers(text, begin, end) {
        var firstChar = text.indexOf(begin) + begin.length;
        var lastChar = text.indexOf(end);
        var newText = text.substring(firstChar, lastChar);
        return newText;
    }


    const urli = url;
    if (urli.includes(encodeURI(engelList)) || urli.includes("&start") || enabled != 1 || urli.includes("/sorry")) {
        //Disabled
    } else {
        const aranan_text = betweenMarkers(urli, "=", "&");
        const newUrl = "https://www.google.com/search?q=" + aranan_text + "+" + engellenen;
        location.href = newUrl;
    }
});