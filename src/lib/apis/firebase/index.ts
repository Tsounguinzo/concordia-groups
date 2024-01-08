import {db} from "$lib/apis/firebase/firebase";
import {addDoc, collection, setDoc, doc, getDocs} from "@firebase/firestore";

const coursesRef = collection(db, 'courses');

export const getAllCourses = async () => {

    try {
        const docsSnap = await getDocs(coursesRef);
        if (docsSnap.docs.length > 0) {
            return docsSnap.docs.map(doc => doc.data())
        }
    } catch (error) {
        console.log(error);
    }

    return []
}

export const addCourse = async (data: any) => {
    try {
        return await addDoc(coursesRef, data);
    } catch (error) {
        console.log(error);
    }

}

export const addOrCreateCourseWithID = async (data: any, id: string) => {
    const docRef = doc(coursesRef, id);

    try {
        return await setDoc(docRef, data);
    } catch (error) {
        console.log(error);
    }

}