const express = require('express');
const routes = express.Router();

routes.get('/', (req, res)=>{
   req.getConnection((err, conn)=>{
       if(err) return res.send(err)
       
       conn.query('SELECT * FROM afiliados', (err, rows) =>{
            if(err) return res.send(err)

            res.json(rows)

       })
       
   })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        
        conn.query('INSERT INTO afiliados set ?', [req.body], (err, rows) =>{
             if(err) return res.send(err)
 
             res.send('cliente registrado!')
 
        })
        
    })
 })

 routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        
        conn.query('DELETE FROM afiliados WHERE id = ?', [req.params.id], (err, rows) =>{
             if(err) return res.send(err)
 
             res.send('cliente eliminado!')
 
        })
        
    })
 })

 
 routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        
        conn.query('UPDATE afiliados set ? WHERE id = ?', [req.body, req.params.id], (err, rows) =>{
             if(err) return res.send(err)
 
             res.send('cliente actualizado!')
 
        })
        
    })
 })
module.exports = routes