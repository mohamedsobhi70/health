$(function () {
  $("#upload-form").validate({
    rules: {
      myselect: {
        required: true,
      },
      date: {
        required: true,
      },
      input1:{
        required: true,
      },
      input2:{
        required: true,
      },
      txtarea:{
        required: true,
      }
    },
  });
});
