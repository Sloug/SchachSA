package SchachSA.model.fullGameInstance.fullGameInstanceBaseImpl

import SchachSA.model.fullGameInstance.FullGameInstanceInterface
import SchachUser.controller.controllerComponent.UserControllerInterface
import SchachUser.controller.controllerComponent.controllerBaseImpl.UserController
import SchachUser.model.userComponent.userBaseImpl.User
import de.htwg.se.Schach.controller.controllerComponent.controllerBaseImpl.LogicController
import de.htwg.se.Schach.controller.controllerComponent.LogicControllerInterface
import de.htwg.se.Schach.model.fieldComponent.fieldBaseImpl.Field


case class GameInstance(logicController: LogicControllerInterface, userController1: UserControllerInterface, userController2: UserControllerInterface) extends FullGameInstanceInterface {
  // when users turn unlock logicControllerFunctions and update the UI fields
  // else just update the UI fields
  def this() = this(new LogicController(new Field()), new UserController(new User("abc", false)),
    UserController(new User("def", true)))

  var previousSelection: Option[(Int, Int)] = Option.empty
  override def newGame: Unit = logicController.newField

  override def select(x: Int, y: Int): Unit = {
    def isValid: Boolean = {
      if (previousSelection.isEmpty) {
        // who's turn?
        // is the figure on the choosed field of this colour?

//        logicController.cellContentBlack(x, y)
      } else true

    }

    if(isValid) {
      previousSelection = if (previousSelection.isEmpty) Option.apply((x, y))
      else {
        val tmp = previousSelection.get
        logicController.move(tmp._1, tmp._2, x, y)
        Option.empty
      }
    }

  }
}
