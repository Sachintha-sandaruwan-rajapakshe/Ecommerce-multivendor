package com.sachi.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BankDetails {
	private String accoutNumber;
	private String accoutHolderName;
	private String ifscCode;
}
