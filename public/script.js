// // Button to Eat
// $('#Eat').on('click', function(event) {
//     event.preventDefault();
//     let devouredIt = {
//         devoured: 1
//     }
//     $.ajax({
//     url: '/api/burger' + $(this).data('id'),
//     method: 'PUT',
//     data: devouredIt,
//     }).then(function(response){
//         location.reload()
//     })

// })

// //Button to Throw it Back Up
// $('#Throw').on("click", function(){
//     this.devoured = false;
// })