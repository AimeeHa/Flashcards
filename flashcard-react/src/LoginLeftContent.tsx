import './LoginLeftContent.css';

export default function LoginLeftContent(message: string) {
  return (
    <>
      <div className="left-content">
        <div className="left-side-content">
          <div className="left-side-photos upper">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMMXHLoJmYGPzpj84ZIg1r1EfvWIlSkCg7w&usqp=CAU"
              alt="photo1"
            />
          </div>
          <div className="left-side-text">
            <h1>{message}</h1>
          </div>
          <div className="left-side-photos lower">
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
