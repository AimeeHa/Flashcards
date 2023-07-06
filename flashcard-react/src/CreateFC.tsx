import { useContext, useState } from 'react';
import './CreateFC.css';
import Layout from './Layout';
import { UserContext } from './UserProvider';

interface Flashcard {
  term: string;
  definition: string;
}

export default function CreateFC() {
  const user = useContext(UserContext);
  const [chooseManual, setChooseManual] = useState('chosen');
  const [chooseCsv, setChooseCsv] = useState('unchosen');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const [flashcards, setFlashcards] = useState<Flashcard[]>([
    { term: '', definition: '' },
  ]);

  if (user == null) {
    return (
      <Layout>
        <div className="null-user-message">
          Please log in to create your own flashcards.
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className="create-page">
          <div className="create-options">
            <div
              className={`create-manually ${chooseManual}`}
              onClick={() => {
                setChooseManual('chosen');
                setChooseCsv('unchosen');
              }}
            >
              CREATE MANUALLY
            </div>
            <div
              className={`create-csv ${chooseCsv}`}
              onClick={() => {
                setChooseManual('unchosen');
                setChooseCsv('chosen');
              }}
            >
              CREATE FROM A .CSV
            </div>
          </div>
          <div className="create-form-overall">
            {/* MANUAL FORM ONLY SHOW WHEN CHOOSE MANUAL IS SELECTED*/}
            <form
              className={
                chooseManual == 'chosen'
                  ? 'create-form show'
                  : 'create-form hidden'
              }
            >
              <FlashcardSetInput
                rootClassName="flashcard-set-info"
                id="title"
                className="set-info-input"
                label="FLASHCARD SET TITLE"
                placeholder="My set 1"
                rows={1}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <FlashcardSetInput
                rootClassName="flashcard-set-info"
                id="description"
                className="set-info-input"
                label="FLASHCARD SET DESCRIPTION"
                placeholder="My set 1's description"
                rows={2}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
              <div className="set-category">
                <div>CATEGORY</div>
                <div className="set-category-options">
                  <select
                    required
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                  >
                    <option value="" disabled selected hidden>
                      Choose a category
                    </option>
                    <option value="english">English</option>
                    <option value="technology">Technology</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>

              <div className="set-flashcards">INPUT YOUR FLASHCARDS</div>
              {flashcards.map((flashcard, i) => (
                <div className="individual-flashcard" key={i}>
                  <div className="individual-flashcard-label">
                    Flashcard {i + 1}
                  </div>
                  <div className="individual-flashcard-content">
                    <FlashcardSetInput
                      id="term"
                      rootClassName="individual-flashcard-input"
                      className="set-info-input individual"
                      placeholder="Term"
                      rows={3}
                      value={flashcard.term}
                      onChange={(e) => {
                        const newFlashcards = [...flashcards];
                        newFlashcards[i].term = e.target.value;
                        setFlashcards(newFlashcards);
                      }}
                    />
                    <FlashcardSetInput
                      id="definition"
                      rootClassName="individual-flashcard-input"
                      className="set-info-input individual"
                      placeholder="Definition"
                      rows={3}
                      value={flashcard.definition}
                      onChange={(e) => {
                        const newFlashcards = [...flashcards];
                        newFlashcards[i].definition = e.target.value;
                        setFlashcards(newFlashcards);
                      }}
                    />
                  </div>
                </div>
              ))}

              <div className="create-buttons-row">
                {/* ADD ONE MORE BLANK FLASHCARD FOR USER TO INPUT */}
                <button
                  className="blue-button"
                  style={{ fontSize: '13px' }}
                  onClick={(e) => {
                    e.preventDefault();
                    setFlashcards([
                      ...flashcards,
                      { term: '', definition: '' },
                    ]);
                  }}
                >
                  Add One Flashcard
                </button>
                {/* SUBMIT THE FLASHCARD SET INFO TO CREATE */}
                <button
                  className="blue-button"
                  style={{ fontSize: '13px' }}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(title, description, category);
                    console.log(flashcards);
                  }}
                  // TODO: handle submit
                >
                  Create Set
                </button>
              </div>
            </form>

            {/* CSV FORM ONLY SHOW WHEN CHOOSE CSV IS SELECTED*/}
            <form
              className={
                chooseCsv == 'chosen'
                  ? 'create-form show'
                  : 'create-form hidden'
              }
            >
              TODO
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}

export function FlashcardSetInput({
  rootClassName,
  id,
  className,
  label,
  placeholder,
  rows,
  value,
  onChange,
}: {
  rootClassName: string;
  id: string;
  className: string;
  label?: string;
  placeholder: string;
  rows: number;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className={rootClassName}>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        className={className}
        placeholder={placeholder}
        rows={rows}
        required
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
