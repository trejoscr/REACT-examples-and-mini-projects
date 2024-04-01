import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../src/firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "../../../src/store/journal/journalSlice";
import { statNewNote } from "../../../src/store/journal/thunks";

describe('pruebas en store/journal/thunks', () => {

  const dispatch = jest.fn();

  const getState = jest.fn();

  beforeEach(()=>jest.clearAllMocks());

  test('statNewNote debe de crear una nueva nota en blanco', async() => {
    const uid = 'TEST-UID';
    getState.mockReturnValue({auth: {uid: uid}})
    await statNewNote()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(savingNewNote());
    expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote({
      body: '',
      title: '',
      id: expect.any(String),
      imageUrls: [],
      date: expect.any(Number)

    }));

    expect(dispatch).toHaveBeenCalledWith(setActiveNote({
      body: '',
      title: '',
      id: expect.any(String),
      imageUrls: [],
      date: expect.any(Number)
    }));

    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);

    const deletePromises = [];
    docs?.forEach((doc)=>deletePromises.push(deleteDoc(doc.ref)));

    await Promise.all(deletePromises);

  });

});