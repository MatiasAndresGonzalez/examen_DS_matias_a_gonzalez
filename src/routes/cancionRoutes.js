import { Router } from "express";
import { Cancion } from "../models/index.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const canciones = await Cancion.findAll();
    res.status(200).json(canciones);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener canciones", error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const cancion = await Cancion.findByPk(id);
    if (cancion) {
      res.status(200).json(cancion);
    } else {
      res.status(400).json({ message: "cancion no encontrada" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener cancion", error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const nuevaCancion = await Cancion.create(req.body);
    res.status(201).json(nuevaCancion);
  } catch (error) {
    if(error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError'){
      return res.status(400).json({ message: 'Error de validación', errors: error.errors ? error.errors.map(e => e.message) : error.message });
    }
    res.status(500).json({ message: 'Error al crear cancion', error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const cancion = await Cancion.findByPk(id);
    if (cancion) {
     const cancionActualizada = await cancion.update(req.body);
     res.status(200).json(cancionActualizada);
    }else{
      res.status(404).json({ message: 'cancion no encontrada para actualizar' })
    }
  } catch (error) {
    if(error.name === 'SequelizeValidationError'){
      return res.status(400).json({ message: 'Error de validación', error: error.message });
    }
    res.status(500).json({ message: 'Error al actualizar cancion', error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
  const resultado = await Cancion.destroy({ where: { id: id } });
  if(resultado > 0){
    res.status(200).json({ message: 'cancion eliminada exitosamente' })
  }else{
    res.status(404).json({ message: 'cancion no encontrada para eliminar' })
  }
  } catch (error) {
    res.status(500).json({ message: 'Error el eliminar cancion', error: error.message });
  }
})

export default router;