import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="new-password"
        />
        <textarea
          placeholder="What happened today"
          className="notes__text-area"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://i.pinimg.com/550x/65/1e/9b/651e9b91f9bbb580f1b26913a565eba4.jpg"
            alt="imagen"
          />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;
