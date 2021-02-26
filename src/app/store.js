import { configureStore } from '@reduxjs/toolkit';
import appSlice from '../features/appSlice';
import messageSlicer from '../features/messageSlicer';

export default configureStore({
   reducer: {
      app: appSlice,
      message: messageSlicer
   },
});
