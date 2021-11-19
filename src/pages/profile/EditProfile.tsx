// NPM Packages
import { useState, FormEvent } from "react";

// Project files
import iUser from "types/iUser";
import { updateDocument } from "scripts/firebase/fireStore";
import ImageUploader from "components/shared/ImageUploader";

interface iProps {
  setEditing: Function;
  setUser: Function;
  user: iUser;
}
export default function EditProfile({ setEditing, user, setUser }: iProps) {
  const [name, setName] = useState(user.username);
  const [DOB, setDOB] = useState(user.DOB);

  const [imageURL, setImageURL] = useState(user.avatar);

  function updateProfile(event: FormEvent) {
    event.preventDefault();
    const profile = {
      id: user.id,
      username: name,
      avatar: imageURL,
      DOB: DOB,
    };
    onUpdate(profile);
    setUser(profile);
  }

  async function onUpdate(selectedItem: any) {
    await updateDocument("users", selectedItem.id, selectedItem);
    alert(`${user.username} profile has been updated`);
    setEditing(false);
  }

  return (
    <div>
      <ImageUploader
        imageURL={imageURL}
        setImageURL={setImageURL}
        title={name}
      />
      <label className="profile-item">
        <h4>Username</h4>
        <input
          className="username"
          type="text"
          placeholder={user.DOB}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label className="profile-item">
        <h4>D.O.B</h4>
        <input
          className="DOB"
          type="text"
          placeholder="DOB, e.g. 07/12/1984"
          value={DOB}
          onChange={(event) => setDOB(event.target.value)}
        />
      </label>

      <div className="edit-buttons">
        <button onClick={updateProfile} className="btn-white">
          Update
        </button>
        <button onClick={() => setEditing(false)} className="btn-transparent">
          Cancel
        </button>
        <button onClick={() => setEditing(false)} className="btn-red">
          Delete
        </button>
      </div>
    </div>
  );
}
