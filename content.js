(function () {
    const lichessUrl = "https://lichess.org"; // Lichess main URL
    const infoBox = document.createElement("div");
    infoBox.id = "lichess-latency-box";
    infoBox.textContent = "Lichess Latency: Calculating...";
    document.body.appendChild(infoBox);
  
    async function measureLichessLatency() {
      const startTime = performance.now();
      try {
        await fetch(lichessUrl, { method: "HEAD" }); // Send a lightweight HEAD request
        const latency = performance.now() - startTime;
        updateLatencyDisplay(latency);
      } catch (error) {
        updateLatencyDisplay(null, true);
      }
    }
  
    function updateLatencyDisplay(latency, isError = false) {
      if (isError) {
        infoBox.textContent = "Lichess Latency: Unable to measure.";
      } else {
        infoBox.textContent = `Lichess Latency: ${latency.toFixed(2)} ms`;
      }
    }
  
    
    setInterval(measureLichessLatency, 1000); // Adjust frequency here
    measureLichessLatency(); // Initial measurement
  })();
  