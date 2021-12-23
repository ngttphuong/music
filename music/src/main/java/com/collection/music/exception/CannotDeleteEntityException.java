package com.collection.music.exception;

import org.zalando.problem.AbstractThrowableProblem;
import org.zalando.problem.Status;

public class CannotDeleteEntityException extends AbstractThrowableProblem {

    public CannotDeleteEntityException(Class<?> entity, String id){
        super(ErrorConstants.DEFAULT_TYPE,
                String.format("Cannot delete entity %s with id = %s", entity.getName(), id),
                Status.BAD_REQUEST);
    }

    public CannotDeleteEntityException(Class<?> entity, Long id){
        super(ErrorConstants.DEFAULT_TYPE,
                String.format("Cannot delete entity %s with id = %d", entity.getName(), id),
                Status.BAD_REQUEST);
    }
}
