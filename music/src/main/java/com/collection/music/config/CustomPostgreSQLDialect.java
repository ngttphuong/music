package com.collection.music.config;

import java.sql.Types;

import org.hibernate.dialect.PostgreSQL94Dialect;
import org.hibernate.type.StandardBasicTypes;

public class CustomPostgreSQLDialect extends PostgreSQL94Dialect{
	public CustomPostgreSQLDialect() {
        super();
        registerHibernateType(Types.INTEGER, StandardBasicTypes.LONG.getName() );
    }
}
