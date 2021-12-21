import JournalEntry from "./JournalEntry";

const JournalEntries = () => {
  const entries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className="journal__entries">
      {entries.map((entrie) => (
        <JournalEntry key={entrie} />
      ))}
    </div>
  );
};

export default JournalEntries;
