import React from 'react'

function TestPromesa() {

//     console.log(1)
    
//     let pago = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(4)
//             reject('pagó!')     
//         }, 3000);
        
//     });
//     console.log(2);

//    pago.then((resolve)=>{
//     console.log(5)
//     console.log(resolve);
//    }).catch((e)=>{
//     console.log('error')
//     console.log(e);
//    });

//    console.log(3);
    // let pago = new Promise((res, rej) => {
    //     setTimeout(() => {
    //         res({ id: 100, name: "guille" });
    //         //rej("TODO MAL");
    //     }, 1000);
        
    // });
    // pago.then((res) => {
    //     console.log(res);})
    //     .catch((e) => {
    //         console.error(e);
    //     })
    //     .finally(() => {
    //             console.log("aca si que termino todo!");
            
    //     });
    let array = [{id:100, nombre:'pelota', precio: 1500 },
    {id:101, nombre:'botines', precio: 2000 },
    {id:102, nombre:'remera', precio: 3500 },
    {id:103, nombre:'patalon', precio: 4500 },
    ];

    // array = [
    //     <>
    //         <p>id:100</p>
    //         <p>nombre:'pelota'</p>
    //         <p>precio: 1500</p>
    //     </>,
    //     <>
    //         <p>id:100</p>
    //         <p>nombre:'pelota'</p>
    //         <p>precio: 1500</p>
    //     </>,
    // ];

  return (
    <>
        {/* <div>TestPromesa</div> */}
        <div className='bg-indigo-400 ml-5 border-solid'> {array.map((item) =>{
            return(
                    <>
                        <p>id: {item.id}</p>
                        <p>nombre: {item.nombre}</p>
                        <p>precio: $ <span className='font-bold'>{item.precio}</span> </p>
                    </>
                );
            })}
        </div>
    </>
    
  )
}

export default TestPromesa
