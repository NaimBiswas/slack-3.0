import { configureStore } from '@reduxjs/toolkit';
import appSlice from '../features/appSlice';

export default configureStore({
   reducer: {
      app: appSlice,
   },
});
