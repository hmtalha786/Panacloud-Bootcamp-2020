import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../../axios/api";
import { Diary } from "../../../../interface/index";

interface DiaryState {
  diaries: Diary[];
  loading: boolean;
}

export const getDiaries = createAsyncThunk(
  "diaries/all",
  async (id: string) => {
    const response = await http.get("/api/diaries/" + id);
    return response;
  }
);

export const updateDiary = createAsyncThunk(
  "diary/update",
  async (data: { title: string; type: "private" | "public"; id?: string }) => {
    const { id, ...formdata } = data;
    const response = await http.put("/api/diary/update/" + id, formdata);
    return response;
  }
);

export const addDiary = createAsyncThunk(
  "add/diary",
  async (data: {
    userId: string;
    title: string;
    type: "private" | "public";
  }) => {
    const response = await http.post("/api/diary/store", data);
    return response;
  }
);

const diarySlice = createSlice({
  name: "diary",
  initialState: {
    diaries: [],
    loading: false,
  } as DiaryState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDiaries.pending, (state, action: PayloadAction<any>) => {
        state.loading = true;
      })
      .addCase(getDiaries.fulfilled, (state, action: PayloadAction<any>) => {
        if (action.payload) {
          return {
            ...state,
            diaries: action.payload.diaries,
            loading: false,
          };
        } else {
          return {
            ...state,
            loading: false,
          };
        }
      })
      .addCase(addDiary.pending, (state, action: PayloadAction<any>) => {
        state.loading = true;
      })
      .addCase(addDiary.fulfilled, (state, action: PayloadAction<any>) => {
        state.diaries.push(action.payload.diary);
        state.loading = false;
      })
      .addCase(updateDiary.pending, (state, action: PayloadAction<any>) => {
        state.loading = true;
      })
      .addCase(updateDiary.fulfilled, (state, action: PayloadAction<any>) => {
        const diaryIndex = state.diaries.findIndex(
          (diary) => diary.id === action.payload.id
        );
        state.diaries[diaryIndex] = action.payload;
        state.loading = false;
      });
  },
});

export default diarySlice.reducer;
