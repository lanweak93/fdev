package com.spdb.fdev.base.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class MD5 {
	private static Logger logger = LoggerFactory.getLogger(MD5.class);
	/*public static String encoder(String salt, String psd) {
		try {
			StringBuilder sb = new StringBuilder();
			//1.指定加密算法
 			MessageDigest digest = MessageDigest.getInstance("MD5");
			//2.将需要加密的字符串转换为byte，然后哈西算法
			byte[] bs = digest.digest((salt + psd).getBytes());
			//3.遍历，让其生成32位字符串，固定写法
			for(byte b : bs) {
				int i = b & 0xff;
				String hexString = Integer.toHexString(i);
				if(hexString.length() < 2) {
					hexString = "0" +hexString;
				}
				
				sb.append(hexString);
 			}
			return sb.toString();
		}catch(NoSuchAlgorithmException e) {
			logger.error("md5加密失败",e);
		}
		return null;
	}*/
	public static void main(String[] args) {
//		String s1 = MD5.encoder("csii_huanghx", "spdb@1234");
//		System.out.println(s1);
	}

}
