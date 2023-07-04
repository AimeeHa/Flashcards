import { useContext, useState } from 'react';
import './CreateFC.css';
import Layout from './Layout';
import { UserContext } from './UserProvider';

export default function CreateFC() {
  const user = useContext(UserContext);
  const [chooseManual, setChooseManual] = useState('chosen');
  const [chooseCsv, setChooseCsv] = useState('unchosen');
  const [show, setShow] = useState(false);

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
            {/* MANUAL FORM */}
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
              />
              <FlashcardSetInput
                rootClassName="flashcard-set-info"
                id="description"
                className="set-info-input"
                label="FLASHCARD SET DESCRIPTION"
                placeholder="My set 1"
                rows={2}
              />
              <div className="set-category">CATEGORY</div>

              <div className="set-flashcards">INPUT YOUR FLASHCARDS</div>
              <div className="individual-flashcard">
                <div className="individual-flashcard-label">Flashcard 1</div>
                <div className="individual-flashcard-content">
                  <FlashcardSetInput
                    id="term"
                    rootClassName="individual-flashcard-input"
                    className="set-info-input individual"
                    placeholder="Term"
                    rows={3}
                  />
                  <FlashcardSetInput
                    id="definition"
                    rootClassName="individual-flashcard-input"
                    className="set-info-input individual"
                    placeholder="Definition"
                    rows={3}
                  />
                </div>
              </div>
            </form>

            {/* CSV FORM */}
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
  onChange,
}: {
  rootClassName?: string;
  id: string;
  className?: string;
  label?: string;
  placeholder: string;
  rows: number;
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
        onChange={onChange}
      ></textarea>
    </div>
  );
}
