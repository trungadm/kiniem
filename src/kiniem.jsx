function Kiniem({
  memories,
  current,
  nextMemory,
  previousMemory,
  goHome,
  setVideoPlaying,
  startMusic
}) {
  const memory = memories[current];

  return (
    <div className="memories">

      <div className="floating-hearts">
        {Array.from({ length: 27 }, (_, i) => (
          <img
            key={i}
            src={`/images/${i + 20}.jpg`}
            alt=""
          />
        ))}
      </div>

      <button
        className="back-button"
        onClick={goHome}
      >
        ← Quay lại
      </button>

      <h1>Câu chuyện của chúng ta</h1>

      <div className="heart-small">❤️</div>

      <div className="memory-card">

        {memory.image && (
          <img
            className="memory-image"
            src={memory.image}
            alt={memory.title || ""}
          />
        )}

        {memory.video && (
          <video
            src={memory.video}
            controls
            playsInline
            onPlay={() => {
              setVideoPlaying(true);
            }}
            onPause={() => {
              setVideoPlaying(false);
              startMusic();
            }}
            onEnded={() => {
              setVideoPlaying(false);
              startMusic();
            }}
          />
        )}

        <div className="memory-content">
          {memory.title && (
            <h2>{memory.title}</h2>
          )}

          <p>{memory.note}</p>
        </div>

      </div>

      <div className="counter">
        {current + 1} / {memories.length}
      </div>

      <div className="navigation">

        <button
          onClick={previousMemory}
          disabled={current === 0}
        >
          ←
        </button>

        <button onClick={nextMemory}>
          {current === memories.length - 1
            ? "Kết thúc ❤️"
            : "Tiếp theo →"}
        </button>

      </div>

    </div>
  );
}

export default Kiniem;