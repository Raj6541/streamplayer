function play() {
  const url = document.getElementById('url').value;
  const player = document.getElementById('player');

  if (url.endsWith('.m3u8')) {
    // Play HLS stream with hls.js
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(player);
    hls.on(Hls.Events.MANIFEST_PARSED, () => player.play());
  } else if (url.endsWith('.mpd')) {
    // Play MPEG-DASH stream with Shaka Player
    const playerInstance = new shaka.Player(player);
    playerInstance.load(url);
  } else {
    // Play other stream formats with native video element
    player.innerHTML = `<video controls autoplay src="${url}"></video>`;
  }
}
