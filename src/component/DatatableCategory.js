import React from 'react'
import { useDeferredValue, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal'

const DatatableCategory = () => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async (id) => {
    setShow(true);
    const req = await fetch('/admin/api/database?id=' + id)
    const res2 = await req.json()
    const res = res2.products
    //console.log(res)
    setCategory(res.cat_name)
    setImage('/category/' + res.cat_image)
    setId(res._id)


  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    //if (!file) return

    if (file.length != 0) {
      try {
        console.log("file is " + file)
        const data = new FormData()

        data.set('file', file)


        data.set('category', category)
        data.set("slug", category.replace(/\s+/g, '-').toLowerCase())


        const res = await fetch('/admin/api/database?id=' + id, {
          method: 'PUT',
          body: data
        })
        // handle the error
        if (!res.ok) {
          throw new Error(await res.text())
        } else {
          handleClose()
          getProducts()
        }

      } catch (error) {
        // Handle errors here
        // console.error(error)
      }

    } else {
      const data = new FormData()

      data.set("category", category)

      const res = await fetch('/admin/api/upload?id=' + id, {
        method: 'PUT',
        body: data
      })

      if (res.ok) {
        handleClose()
        getProducts()

      }
    }


  }

  const router = useRouter()
  const columns = [

    {
      name: "Category Name",
      selector: (row) => row.cat_name
    },
    {
      name: "Image",
      selector: (row) => <img src={`/category/${row.cat_image}`} style={{ width: '60px', height: '60px', borderRadius: '50px' }} />
    },
    {
      name: "Action",
      cell: (row) =>
        <>
          <button className="btn btn-sm btn-primary" onClick={() => handleShow(row._id)}><FontAwesomeIcon icon={faPenToSquare} /></button>&nbsp;&nbsp;
          <button className="btn btn-sm btn-danger" onClick={() => handleDelete(row._id)}><FontAwesomeIcon icon={faTrash} /></button>
        </>
    },
  ]

  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState([])

  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [file, setFile] = useState("")
  const [id, setId] = useState("")
  const [image, setImage] = useState("")
  const [image2, setImage2] = useState("")

  const handleDelete = async (val) => {


    //const newdata = data.filter((item)=>item._id !==val)

    //setFilter(newdata)

    if (window.confirm('Do you want to delete?')) {

      const res = await fetch('/admin/api/upload?id=' + val, {
        method: 'DELETE'
      })

      const res2 = res.json()
      //console.log(res2.courses)
    }
    //router.refresh()
    getProducts()


  }

  const tableStyle = {
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "14px",
        backgroundColor: "yellow"
      }
    }
  }

  const categoryChangeImage = (e) => {
    setFile(e.target.files?.[0])
    var reader = new FileReader();
    reader.onload = function () {

      setImage(reader.result)
    }
    reader.readAsDataURL(e.target.files[0])
  }

  const getProducts = async () => {
    {/* https://fakestoreapi.com/products */ }
    try {
      const req = await fetch('/admin/api/categoryupload')
      const res2 = await req.json()
      const res = res2.products
      setData(res)
      setFilter(res)
      //console.log(data._id)
    } catch (error) {
      //console.log(error)
    }

  }

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {

    const result = data.filter((item) => {
      return item.cat_name.toLowerCase().match(search.toLocaleLowerCase())
    })
    setFilter(result)

  }, [search])
  return (
    <>
      <DataTable
        columns={columns}
        customStyles={tableStyle}
        data={filter}
        pagination
        selectableRows
        fixedHeader
        selectableRowsHighlight
        highlightOnHover
        subHeader
        subHeaderComponent={
          <input type="text" className='form-control' placeholder="Search...." value={search}
            onChange={(e) => setSearch(e.target.value)} />
        }
        subHeaderAlign='right'
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form action="" method="post" enctype="multipart/form-data" onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="title">Category Name</label>
              <input type="text" class="form-control" id="title" placeholder="Enter title" onChange={(e) => setCategory(e.target.value)} value={category} />
            </div>

            <input type="hidden" value={id} />
            <div class="form-group">
              <label for="file">Image</label>
              <input type="file" class="form-control" id="file" onChange={(e) => categoryChangeImage(e)} />
              <img src={image} style={{ width: '100px', height: '100px', border: '1px solid grey', borderRadius: '50px' }} />
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>

        </Modal.Body>

      </Modal>
    </>
  )
}

export default DatatableCategory
