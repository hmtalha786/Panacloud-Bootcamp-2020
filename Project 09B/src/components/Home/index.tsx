import React, { ReactElement, Fragment, useEffect } from "react";
import "../../App.css";
import Diary from "../Dairy";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../services/redux/reducer";
import { getDiaries } from "../../services/redux/slices/diary";
import DiaryModal from "../Dairy/DiaryModal";

interface Props {}
// eslint-disable-next-line
function Home({}: Props): ReactElement {
  const { diaries } = useSelector((state: RootState) => state.diary);
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    user && user?.id && dispatch(getDiaries(user?.id));
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <Fragment>
      <section className="">
        <div className="">
          <h3>Diaries</h3>
          <DiaryModal
            btnTitle={"Create New"}
            title={"Create Diary"}
            id={""}
            mode={"add"}
            editInfo={{ title: "", type: "private" }}
          />
        </div>
        <div className="diaryCards">
          {diaries.length > 0 &&
            diaries.map((diary) => (
              <Diary
                title={diary?.title}
                id={diary?.id}
                key={diary?.id}
                type={diary?.type}
              />
            ))}
        </div>
      </section>
    </Fragment>
  );
}

export default Home;
