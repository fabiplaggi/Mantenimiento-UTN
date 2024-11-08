import {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../models/orden_trabajo.models.js";

export const obtenerOrdenes = async (req, res) => {
  try {
    const orders = await getOrders(req.query);
    res.status(200).json(orders);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener órdenes de trabajo", error });
  }
};

export const crearOrden = async (req, res) => {
  const orderData = req.body;
  const userId = req.user.id;

  orderData.id_usuario = userId;
  try {
    const id = await createOrder(orderData);
    res
      .status(201)
      .json({ message: "Orden de trabajo creada exitosamente", id });
  } catch (error) {
    res.status(500).json({ message: "Error al crear la orden", error });
  }
};

export const actualizarOrden = async (req, res) => {
  const { id } = req.params;
  const orderData = req.body;
  try {
    await updateOrder(id, orderData);
    res
      .status(200)
      .json({ message: "Orden de trabajo actualizada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la orden", error });
  }
};

export const eliminarOrden = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteOrder(id);
    res
      .status(200)
      .json({ message: "Orden de trabajo eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la orden", error });
  }
};
