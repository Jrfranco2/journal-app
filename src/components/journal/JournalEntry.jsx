const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://firebasestorage.googleapis.com/v0/b/wallet-roman.appspot.com/o/Landscape-Color.jpg?alt=media&token=453f432b-a910-467f-a35c-f06dd8bdb965)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo dia</p>
        <p className="journal__entry-content">
          Sint aute culpa nisi eiusmod non. Culpa deserunt mollit est culpa
          nostrud non. Voluptate incididunt aute elit elit elit velit dolor
          occaecat nostrud irure. Anim quis deserunt fugiat eu cupidatat.
          Cupidatat est id consectetur nulla aliqua commodo nulla eiusmod
          officia irure et Lorem. Et pariatur et sunt cillum eu aliquip qui.
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
