import { useContext, useState } from 'react';
import './CreateFC.css';
import Layout from './Layout';
import { UserContext } from './UserProvider';
import { TabView } from './TabsView';
import DriveFolderUploadRoundedIcon from '@mui/icons-material/DriveFolderUploadRounded';

interface Flashcard {
  term: string;
  definition: string;
}

export default function CreateFC() {
  const user = useContext(UserContext);

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
        <TabView
          tabs={[
            { name: 'CREATE MANUALLY', view: <ManualCreate /> },
            { name: 'CREATE FROM .CSV', view: <CsvCreate /> },
          ]}
        ></TabView>
      </Layout>
    );
  }
}

/* CSV FORM ONLY SHOW WHEN CHOOSE CSV IS SELECTED*/
function CsvCreate() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [fileName, setFileName] = useState('Browse to choose file');

  return (
    <form className="create-form">
      <FlashcardSetGeneralInfo
        onTitleChange={setTitle}
        onDescriptionChange={setDescription}
        onCategoryChange={setCategory}
      />
      <div className="csv-instruction">
        <div>* Notes for your .csv file:</div>
        <ul>
          <li>Should contain only two (2) columns for Term and Definition.</li>
          <li>Should not contain any header row.</li>
        </ul>
      </div>
      {/* TODO: */}
      <div className="csv-upload-root">
        <div style={{ width: '165px' }}>UPLOAD YOUR .CSV FILE</div>
        <div className="csv-upload">
          <label className="csv-upload-label" htmlFor="csv">
            <DriveFolderUploadRoundedIcon /> &nbsp; {fileName}
          </label>
          <input
            type="file"
            id="csv"
            name="csv"
            accept=".csv"
            onChange={(e) => {
              e.preventDefault();
              if (e.target.files !== null) {
                setFileName(e.target.files[0].name);
              }
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <button
          className="blue-button"
          style={{ fontSize: '13px', marginTop: '7px' }}
          onClick={(e) => {
            e.preventDefault();
            console.log(title, description, category, fileName);
          }}
          // TODO: handle submit
        >
          Create Set
        </button>
      </div>
    </form>
  );
}

/* MANUAL FORM ONLY SHOW WHEN CHOOSE MANUAL IS SELECTED*/
function ManualCreate() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const [flashcards, setFlashcards] = useState<Flashcard[]>([
    { term: '', definition: '' },
  ]);

  return (
    <>
      <form className="create-form">
        <FlashcardSetGeneralInfo
          onTitleChange={setTitle}
          onDescriptionChange={setDescription}
          onCategoryChange={setCategory}
        />

        <div className="set-flashcards">INPUT YOUR FLASHCARDS</div>
        {flashcards.map((flashcard, i) => (
          <div className="individual-flashcard" key={i}>
            <div className="individual-flashcard-label">Flashcard {i + 1}</div>
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
              setFlashcards([...flashcards, { term: '', definition: '' }]);
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
    </>
  );
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

// A SEPARATED FUNCTION FOR FLASHCARD SET GENERAL INFO INCL. TITLE, DESCRIPTION, CATEGORY
type FlashcardSetGeneralInfoProps = {
  onTitleChange: React.Dispatch<React.SetStateAction<string>>;
  onDescriptionChange: React.Dispatch<React.SetStateAction<string>>;
  onCategoryChange: React.Dispatch<React.SetStateAction<string>>;
};

export function FlashcardSetGeneralInfo({
  onTitleChange,
  onDescriptionChange,
  onCategoryChange,
}: FlashcardSetGeneralInfoProps) {
  return (
    <>
      <FlashcardSetInput
        rootClassName="flashcard-set-info"
        id="title"
        className="set-info-input"
        label="FLASHCARD SET TITLE"
        placeholder="My set 1"
        rows={1}
        // value={title}
        onChange={(e) => {
          onTitleChange?.(e.target.value);
        }}
      />
      <FlashcardSetInput
        rootClassName="flashcard-set-info"
        id="description"
        className="set-info-input"
        label="FLASHCARD SET DESCRIPTION"
        placeholder="My set 1's description"
        rows={2}
        // value={description}
        onChange={(e) => {
          onDescriptionChange?.(e.target.value);
        }}
      />
      <div className="set-category">
        <div>CATEGORY</div>
        <div className="set-category-options">
          <select
            required
            // value={category}
            onChange={(e) => {
              onCategoryChange?.(e.target.value);
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
    </>
  );
}
