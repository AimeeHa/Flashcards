import './LoginLeftContent.css';

export default function LoginLeftContent() {
  return (
    <>
      <div className="left-content">
        <div className="left-side-content">
          <div className="left-side-photos">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMMXHLoJmYGPzpj84ZIg1r1EfvWIlSkCg7w&usqp=CAU"
              alt="photo1"
            />
          </div>
          <div className="left-side-text">
            <div>SOMETHING</div> <div> Just Something Something</div>
          </div>
          <div
            className="left-side-photos"
            style={{ justifyContent: 'flex-end' }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMMXHLoJmYGPzpj84ZIg1r1EfvWIlSkCg7w&usqp=CAU"
              alt="photo2"
            />
          </div>
        </div>
      </div>
    </>
  );
}
