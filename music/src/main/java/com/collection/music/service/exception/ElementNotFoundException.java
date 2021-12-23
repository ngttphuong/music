package com.collection.music.service.exception;

public class ElementNotFoundException extends RuntimeException{
	private static final long serialVersionUID = -1495953681790772779L;

	public ElementNotFoundException(final Class<?> entity, final Long id) {
	    super(String.format("Cannot find entity of class [%s] with id [%d]", entity.getName(), id));
	  }

	  public ElementNotFoundException(final Class<?> entity, final String id) {
	    super(String.format("Cannot find entity of class [%s] with id [%s]", entity.getName(), id));
	  }

}
