
axios.get('https://api.vschool.io/tallan/todo/')

.then( res => {
    const content = res.data.reverse()
    listTodos(content)
    
  })
  .catch( err => {
    console.log(err)
    
  })

  function listTodos(content) {
    
    const make = e => (document.createElement(e))
    const appen = (p, c) => (p.appendChild(c))
    let counter = 1;
    for (var i = 0; i < content.length; i++) {
      const container = make('div')
      const title = make('h1')
      const description = make('h4')
      const edit = make('button')
      const del = make('button')
      const form = make('form')
      const input = make('input')
      const putDescrip = make('input')
      const checkmark = make('input')
      const checktext = make('p')
      const aTag = make('a')
      const img = make('img')
      const imgInput = make('input')
      
      
      
      
      img.src = content[i].imgUrl
      aTag.href = img.src
      
      imgInput.type = 'text'
      imgInput.name = 'image'
      imgInput.placeholder = 'image URL goes here'
      checktext.innerHTML = 'mark complete </br />'
      input.type = 'text'
      input.name = 'edit'
      input.placeholder = 'edit title'
      putDescrip.type = 'text'
      putDescrip.name = 'descript'
      putDescrip.placeholder = 'edit description'
      checkmark.type = 'checkbox'
      checkmark.name = 'complete'

      title.textContent = ` ${counter++}: ${content[i].title} `
      description.textContent = content[i].description 

      edit.textContent = 'edit'
      del.textContent = 'delete'
      const theId = content[i]._id


      
      appen(document.body, container)
      appen(container,title)
      appen(container,description)
      aTag.appendChild(img)
      container.appendChild(aTag)
      
      container.appendChild(edit)
      container.appendChild(form)

      form.appendChild(imgInput)
      form.appendChild(input)
      form.appendChild(putDescrip)
      form.appendChild(checktext)
      form.appendChild(checkmark)
      form.appendChild(edit)
      input.classList.add(theId)
      container.classList.add('container')
      putDescrip.classList.add(theId)
      checkmark.classList.add(theId)
      imgInput.classList.add(theId)
      img.classList.add('img')
      container.appendChild(del)
      del.classList.add(theId)
      del.classList.add('delete')
      
      
      if (content[i].completed === true) {
        title.classList.add('completed')
      }
      
      let imgId = container.children[3][0]
      let titleId = container.children[3][1]
      let descripId = container.children[3][2]
      let checkId = container.children[3][3]



  
      
      form.addEventListener('submit', function(e) {
        e.preventDefault()
        updateObj = {}
          if (titleId.value !== '') {updateObj.title = titleId.value}
          if (descripId.value !== '') {updateObj.description = descripId.value}
          if (imgId.value !== '') {updateObj.imgUrl = imgId.value }
            axios.put(`https://api.vschool.io/tallan/todo/${titleId.className}`,  { completed: checkId.checked})
            axios.put(`https://api.vschool.io/tallan/todo/${titleId.className}`,  updateObj)
            function autoRefresh() {
              setTimeout("location.reload(true);", 100);
           }
          autoRefresh()
          });





      del.addEventListener('click', function() {
        axios.delete(`https://api.vschool.io/tallan/todo/${theId}`)
        function autoRefresh() {
          setTimeout("location.reload(true);", 100);
       }
      autoRefresh()
      })

    }
  }


form.addEventListener('submit', function(e)  {
  e.preventDefault()
  let d = document.form.description.value 
  let t = document.form.title.value
  let imge = document.form.image.value

  axios.post('https://api.vschool.io/tallan/todo/', {title: t, description: d, imgUrl: imge})
  .catch(err => console.log(err))
  function autoRefresh() {
    setTimeout("location.reload(true);", 1000);
 }
autoRefresh()
})






