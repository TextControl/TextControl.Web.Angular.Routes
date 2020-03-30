# TextControl.Web.Angular.Routes
TX Text Control for Angular is created as a singleton instance on a page. Therefore, the complete control must be removed explicitly from the DOM when loading a partial view a second time. In Angular, "partial views" are implemented through routes.
