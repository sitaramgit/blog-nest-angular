import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import ReactDOM from 'react-dom/client';

const toastMessage = (message: string, severity: 'error' | 'success' | 'info' | 'warning' = 'error') => {
      const toastId = 'toast-messages';
       // Create a toast container if it doesn't exist
       const toastContainer: HTMLElement | any = document.getElementById(toastId);
       if (!toastContainer) {
         const div = document.createElement('div');
         div.id = toastId;
         document.body.appendChild(div);
       }
        // Render the toast
        const toast = ReactDOM.createRoot(document.getElementById(toastId) as HTMLElement);
        toast.render(
          <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={true} autoHideDuration={6000} onClose={() => {}}>
            <Alert
              onClose={() => {clearToastDOM()}}
              severity={severity}
              variant="filled"
              sx={{ width: '100%' }}
            >
              {message}
            </Alert>
          </Snackbar>
        );
        const clearToastDOM = () => {
          const elm: any = document.getElementById(toastId);
          elm?.remove();
        }

}
export default toastMessage;