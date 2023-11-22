import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Posts() {
    const [users, setusers] = useState([])
    const [loading, setloading] = useState(true)
    const [userPosts, setUserPosts] = useState([])

    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        setusers(res.data)
        setloading(false)
    })
    .catch(err => {
        console.log(err)
    })
    }, [])

    const getUserPosts = (id) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(res => {
            setUserPosts(res.data)
        })
    }
  return (
    <>
    {
        loading ? <div>Loading...</div> :
        <>
        <ul style={{display: 'flex', justifyContent:'space-around', listStyle: 'none'}}>
            <li><Link to={"/"}>Product Sample</Link></li>
            <li><Link to={"/posts"}>Posts Sample</Link></li>
        </ul>
        <h3>Posts</h3>
        <select onChange={(e) => getUserPosts(e.target.value)}>
            <option value="">Select User</option>
            {users.map(user => {
            return <option key={user.id} value={user.id}>{user.name}</option>
        })}
        </select>
        <table>
            <thead>
                <tr>
                    <th>UserId</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {
                    userPosts.map(post => {
                        return <tr key={post.id}>
                            <td>{post.userId}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        </>
    }
    </>
  ) 
}

export default Posts