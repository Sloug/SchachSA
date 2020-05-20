package SchachSA.controllerComponent

//import de.htwg.se.Schach.controller.controllerComponent.LogicControllerInterface

trait InstanceControllerInterface //extends LogicControllerInterface
{

  def newInstance(name1: String, name2: String): Unit

}

//import scala.swing.event.Event
//
//class CellChanged extends Event
//class NextTurn extends Event