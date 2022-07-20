$(function () {
  $("#upload-form").validate({
    rules: {
      myselect: {
        required: true,
      },
      date: {
        required: true,
      },
    },
  });
});
