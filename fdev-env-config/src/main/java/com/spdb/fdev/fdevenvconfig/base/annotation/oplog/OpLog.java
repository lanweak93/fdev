package com.spdb.fdev.fdevenvconfig.base.annotation.oplog;

import java.lang.annotation.*;

/**
 * 记录操作员操作日志
 *
 * @author csii_hujx
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@Documented
public @interface OpLog {
    String controllerName() default "";
}
