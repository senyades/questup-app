import { enqueueSnackbar } from "notistack";

function showError(enqueueSnackbar, error) {
  enqueueSnackbar(error, { variant: "error" });
};

export default { showError };